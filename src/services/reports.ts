import api from "@/services/api";

export default {
  getReports: () => {
    return api().get("/report");
  },
  getReport: (id: string) => {
    return api().get("/report/" + id);
  }
};
