import httpService from "./httpService";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const courseListApi = (params) => {
  return httpService.get(baseUrl + `Course/CourseList`, { params });
};

export const courseGroupApi = (params) => {
  return httpService.get(baseUrl + `CourseGroup`, { params });
};

export const addCourseGroupApi = (payload) => {
  return httpService.post(baseUrl + `CourseGroup`, payload, {
    headers: {
      useMultipartForm: true,
    },
  });
};

export const deleteCourseGroupApi = (id) => {
  return httpService.delete(baseUrl + `CourseGroup`, {
    headers: {
      useMultipartForm: true,
    },
    data: {
      id,
    },
  });
};

export const updateCourseGroupApi = (payload) => {
  return httpService.put(baseUrl + `CourseGroup`, payload, {
    headers: {
      useMultipartForm: true,
    },
  });
};

export const courseGroupDetailsApi = (params) => {
  return httpService.get(baseUrl + `CourseGroup/Details`, { params });
};

export const courseReserveDetailsApi = (CourseId) => {
  return httpService.get(baseUrl + `CourseReserve/${CourseId}`);
};

export const courseReserveApi = () => {
  return httpService.get(baseUrl + `CourseReserve`);
};

export const deleteCourseReserveApi = (id) => {
  return httpService.delete(baseUrl + `CourseReserve`, {
    data: {
      id,
    },
  });
};

export const courseDetailsApi = (id) => {
  return httpService.get(baseUrl + `Course/${id}`);
};

export const activeAndDeactiveCourseApi = (payload) => {
  return httpService.put(baseUrl + `Course/ActiveAndDeactiveCourse`, payload);
};

export const deleteCourseApi = (payload) => {
  return httpService.delete(baseUrl + `Course/DeleteCourse`, {
    data: {
      ...payload,
    },
  });
};

export const updateCourseStatusApi = (payload) => {
  return httpService.put(baseUrl + `Course/UpdateCourseStatus`, payload, {
    headers: {
      useMultipartForm: true,
    },
  });
};

export const courseStatusApi = () => {
  return httpService.get(baseUrl + `Status`);
};

export const getCourseUserListApi = (params) => {
  return httpService.get(baseUrl + `CourseUser/GetCourseUserList`, { params });
};
