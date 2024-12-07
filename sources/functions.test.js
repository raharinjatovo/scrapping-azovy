const axios = require("axios");
const getWhois = require("./functions"); // Adjust path if needed

jest.mock("axios");

describe("getWhois Class Tests", () => {
  let whois;

  beforeEach(() => {
    whois = new getWhois();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should throw an error if phone number length is not 10", async () => {
    await expect(whois.getInfos("123")).rejects.toThrow(
      "Phone number should have 10 digits"
    );
    await expect(whois.getInfos("12345678901")).rejects.toThrow(
      "Phone number should have 10 digits"
    );
  });

  test("should throw an error if phone number contains non-digit characters", async () => {
    await expect(whois.getInfos("123456789a")).rejects.toThrow(
      "Phone number should contain only digits"
    );
    await expect(whois.getInfos("12345-6789")).rejects.toThrow(
      "Phone number should contain only digits"
    );
    await expect(whois.getInfos("12345 6789")).rejects.toThrow(
      "Phone number should contain only digits"
    );
  });

  test("should call axios with correct configuration for valid input", async () => {
    const mockResponse = { data: { info: "mocked info" } };
    axios.request.mockResolvedValueOnce(mockResponse);

    const result = await whois.getInfos("1234567890");
    expect(axios.request).toHaveBeenCalledWith({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://azovy.vercel.app/api/whois",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        phone_number: "1234567890",
      }),
    });

    expect(result).toEqual({ info: "mocked info" });
  });

  test("should handle axios errors gracefully", async () => {
    axios.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(whois.getInfos("1234567890")).rejects.toThrow("Network Error");
    expect(axios.request).toHaveBeenCalledTimes(1);
  });

  test("should log errors when an error occurs", async () => {
    console.error = jest.fn(); // Mock console.error
    axios.request.mockRejectedValueOnce(new Error("Mock API Error"));

    await expect(whois.getInfos("1234567890")).rejects.toThrow("Mock API Error");
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching data:",
      "Mock API Error"
    );
  });
});
