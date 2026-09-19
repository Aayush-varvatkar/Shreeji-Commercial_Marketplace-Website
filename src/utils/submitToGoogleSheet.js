export const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycby0DMC06lA-o6VZopFFHrFAA7xRTGuryjYwbAKfsmObOKhH5qCIHqvSNd93FkTIFOps/exec";

/**
 * Utility to submit form lead data to Google Apps Script Web App linked to Google Sheet
 * @param {Object} data - Form field values { name, email, phone, countryCode, formType }
 */
export async function submitToGoogleSheet(data) {
  try {
    const params = new URLSearchParams();
    
    const name = (data.name || '').trim();
    const rawPhone = (data.phone || '').trim();
    const countryCode = data.countryCode || '';
    const fullPhone = countryCode ? `${countryCode} ${rawPhone}` : rawPhone;
    const email = (data.email || '').trim();
    const formType = data.formType || data.source || 'Website Form';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Populate parameters to match any common column header names in Google Sheet
    params.append('name', name);
    params.append('Name', name);
    params.append('Full Name', name);
    
    params.append('phone', fullPhone);
    params.append('Phone', fullPhone);
    params.append('mobile', fullPhone);
    params.append('Mobile', fullPhone);
    params.append('Phone Number', fullPhone);
    
    params.append('email', email);
    params.append('Email', email);

    params.append('formType', formType);
    params.append('Form Type', formType);
    params.append('source', formType);
    params.append('Source', formType);

    params.append('timestamp', timestamp);
    params.append('Timestamp', timestamp);

    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting form data to Google Sheet:', error);
    return { success: false, error };
  }
}

export default submitToGoogleSheet;
