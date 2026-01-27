import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Enter you password"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("https://bookstore.eraasoft.pro/api/login", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center font-bold text-pink-500">Welcome Back!</h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <Field
                  name="email"
                  placeholder="email@example.com"
                  className="input input-bordered"
                />

                <p className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="email" component={"p"} />
                </p>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <Field
                  name="password"
                  placeholder="*******"
                  className="input input-bordered"
                />

                <p className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="password" component={"p"} />
                </p>

                <div className="flex justify-between mt-5">
                  <div>
                    <input type="checkbox" className="mr-1" />
                    <label className="label cursor-pointer">
                      <span className="label-text-alt">Remember Me</span>
                    </label>
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-pink-600 text-white w-full"
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>

          <div className="text-center">
            <p>
              Don't have an account !{" "}
              <a href="#" className="text-pink-700">
                sign up
              </a>
            </p>

            <label className="label">Or</label>

            <div className="form-control mt-6">
              <button className="btn text-black w-full">
                Login with google
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn text-black w-full">
                Login with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
