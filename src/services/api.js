/**
 * A class-based API client
 */
class RestApiClient {
  constructor() {
    // Load the base URL from the environment variable
    // this.baseURL = import.meta.env.VITE_API_BASE_URL;
    this.baseURL = 'http://localhost:3050';

    if (!this.baseURL) {
      console.error("API_BASE_URL not found in environment variables.");
    }

    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Private core method to handle all fetch requests.
   * @param {string} endpoint - The path appended to the baseURL.
   * @param {object} [options={}] - Custom fetch options.
   * @returns {Promise<object>} - Parsed JSON data or the raw Response object.
   */
  async #fetch(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      // Handle HTTP error statuses
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP Error! Status: ${response.status}, Endpoint: ${endpoint}, Details: ${errorBody}`);
      }

      // Handle successful responses that might not have a body (e.g., 204 No Content)
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      // Return the response object for non-JSON content or 204
      return response;

    } catch (error) {
      console.error('API Fetch failed:', error);
      throw error; // Re-throw for the caller to handle
    }
  }

  /**
   * Performs a GET request.
   * @param {string} endpoint - The resource path.
   */
  get(endpoint) {
    return this.#fetch(endpoint, { method: 'GET' });
  }

  /**
   * Performs a POST request.
   * @param {string} endpoint - The resource path.
   * @param {object} data - The request body (will be stringified to JSON).
   */
  post(endpoint, data) {
    return this.#fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Performs a PUT request (full replacement).
   * @param {string} endpoint - The resource path.
   * @param {object} data - The request body.
   */
  put(endpoint, data) {
    return this.#fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * Performs a DELETE request.
   * @param {string} endpoint - The resource path.
   */
  delete(endpoint) {
    return this.#fetch(endpoint, { method: 'DELETE' });
  }
}

// Export a single instance to be used throughout your application
export const apiClient = new RestApiClient();
