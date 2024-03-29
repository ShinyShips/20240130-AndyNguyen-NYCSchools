// Generated by CodiumAI

describe('fetchSchoolList', () => {

    // Fetches data from the City of New York Open Data API successfully
    it('should fetch data successfully from the API', () => {
        return fetchSchoolList().then(data => {
            expect(data).toBeDefined();
        });
    });

    // Returns data in JSON format
    it('should return data in JSON format', () => {
        return fetchSchoolList().then(data => {
            expect(typeof data).toBe('object');
        });
    });

    // Returns an array of school objects
    it('should return an array of school objects', () => {
        return fetchSchoolList().then(data => {
            expect(Array.isArray(data)).toBe(true);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0]).toBe('object');
        });
    });

    // Handles unsuccessful response from the API
    it('should handle unsuccessful response from the API', () => {
      // Mocking a failed response
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('API request failed')));

        return fetchSchoolList().catch(error => {
            expect(error).toBe('Error fetching data Error: API request failed');
        });
    });

    // Handles unsuccessful parsing of JSON data
    it('should handle unsuccessful parsing of JSON data', () => {
      // Mocking a successful response with invalid JSON data
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.reject(new Error('Invalid JSON data')) }));

        return fetchSchoolList().catch(error => {
            expect(error).toBe('Error fetching data Error: Invalid JSON data');
        });
    });

    // Returns an error message when API call fails
    it('should return an error message when API call fails', () => {
      // Mocking a failed response
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('API request failed')));

        return fetchSchoolList().catch(error => {
            expect(error).toBe('Error fetching data Error: API request failed');
        });
    });
});
