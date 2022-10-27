import { axiosBeta } from './axiosBeta';

export type NotificationItem = {
  description: string;
  networkId: string;
  userId: string;
  verb: string;
  targetId: string;
  imageUrl: string;
  customImageUrl?: string;
  targetType: 'community' | 'post';
  targetGroup: string;
  lastUpdate: number;
  hasRead: boolean;
};

export type NotificationResponse = {
  lastRead?: {
    ch_uid: string;
    lastReadDate: number;
  };
  data?: NotificationItem[];
  lastRecordDate?: number;
};

export type UpdateHadReadRequest = {
  verb: string;
  targetId: string;
  targetGroup: string;
};

export type NotificationRequest = {
  searchAfter?: number;
};

export const getNotificationHistory = (params?: NotificationRequest) =>
  axiosBeta.get<NotificationResponse>('/notifications/history', { params });

export const updateNotificationRead = (data: UpdateHadReadRequest) => axiosBeta.post('/notifications/read', data);

export const updateNotificationLastRead = () => axiosBeta.post('/notifications/last-read');
