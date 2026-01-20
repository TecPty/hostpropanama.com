/**
 * Interfaz estándar de respuesta API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

/**
 * Realizar request GET
 */
export const apiGet = async <T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, message: "Success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message, error: message };
  }
};

/**
 * Realizar request POST
 */
export const apiPost = async <T = any>(
  endpoint: string,
  payload: any,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(payload),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, message: "Success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message, error: message };
  }
};

/**
 * Realizar request PUT
 */
export const apiPut = async <T = any>(
  endpoint: string,
  payload: any,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(payload),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, message: "Success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message, error: message };
  }
};

/**
 * Realizar request DELETE
 */
export const apiDelete = async <T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, message: "Success", data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message, error: message };
  }
};
