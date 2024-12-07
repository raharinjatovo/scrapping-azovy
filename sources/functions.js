const axios = require("axios");

class getWhois {
  async getInfos(number) {
    if (number.length !== 10) {
      throw new Error("Phone number should have 10 digits");
    }

    if (!/^\d+$/.test(number)) {
      throw new Error("Phone number should contain only digits");
    }

    const data = JSON.stringify({
      phone_number: number,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://azovy.vercel.app/api/whois",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
}

module.exports = getWhois;
