import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, phone, service, location } = body;

    // Validate the input
    if (!name || !phone) {
      return NextResponse.json(
        { message: 'Tên và số điện thoại là bắt buộc' },
        { status: 400 },
      );
    }

    // Set up Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get the location label instead of just the ID
    const locationMap: Record<string, string> = {
      cs1: 'Cơ sở 1',
      cs2: 'Cơ sở 2',
      cs3: 'Cơ sở 3',
      cs4: 'Cơ sở 4',
    };

    // Add a timestamp
    const timestamp = new Date().toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
    });

    console.log('Timestamp:', process.env.GOOGLE_SHEET_ID);

    // Append data to the sheet
    // Format: [Timestamp, Name, Phone, Service, Location]
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E', // Adjust based on your sheet's structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [timestamp, name, phone, service, locationMap[location] || location],
        ],
      },
    });

    return NextResponse.json({
      message: 'Đăng ký thành công!',
      data: response.data,
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { message: 'Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.' },
      { status: 500 },
    );
  }
}
