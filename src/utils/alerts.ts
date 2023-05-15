const succesAlert = (msg: string) => {
  import("react-hot-toast").then(({ toast }) => toast.success(msg));
};
const errorAlert = (msg: string) => {
  import("react-hot-toast").then(({ toast }) => toast.error(msg));
};

export default {
  succesAlert,
  errorAlert,
};
