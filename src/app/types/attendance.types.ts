// types/attendance.types.ts
export type AttendanceStatus = "present" | "absent" | "holiday" | "weekend";

export interface AttendanceRecord {
  date: string;
  status: AttendanceStatus;
}

export interface StaffInfo {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  joinDate: string;
  email: string;
}

export interface StatusConfig {
  label: string;
  bg: string;
  text: string;
  icon: React.ReactNode;
  gradient: string;
}

export interface AttendanceSummary {
  present: number;
  absent: number;
  holiday: number;
  weekend: number;
  attendanceRate: string;
}
