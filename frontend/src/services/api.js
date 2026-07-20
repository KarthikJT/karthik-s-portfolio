import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach owner's JWT token (if logged in) to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("karthik_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If the token has expired/is invalid, bounce the owner back to the login screen
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("karthik_admin_token");
    }
    return Promise.reject(error);
  }
);

// ---------- Public read endpoints ----------
export const getProfile = () => api.get("/profile");
export const getProfessionalSummary = () => api.get("/professional-summary");
export const getEducation = () => api.get("/education");
export const getSkills = () => api.get("/skills");
export const getInternships = () => api.get("/internships");
export const getProjects = () => api.get("/projects");
export const getHackathons = () => api.get("/hackathons");
export const getCertifications = () => api.get("/certifications");
export const getAchievements = () => api.get("/achievements");
export const getContact = () => api.get("/contact");
export const getSocialLinks = () => api.get("/social-links");

// ---------- Auth ----------
export const loginOwner = (email, password) =>
  api.post("/auth/login", { email, password });
export const getMe = () => api.get("/auth/me");

export default api;
