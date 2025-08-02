// Global common types used across the application

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'restaurant' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  banner?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  pointsEarned: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  dishId: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
}

export interface Payment {
  id: string;
  userId: string;
  orderId: string;
  amount: number;
  method: 'card' | 'cash' | 'points';
  status: 'pending' | 'completed' | 'failed';
  pointsUsed: number;
  pointsEarned: number;
  createdAt: Date;
}

export interface Reward {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  pointsRequired: number;
  discountPercentage?: number;
  discountAmount?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh';
export type Theme = 'light' | 'dark' | 'system'; 