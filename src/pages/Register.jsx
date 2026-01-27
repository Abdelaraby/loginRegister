import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("https://bookstore.eraasoft.pro/api/register", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
      });
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Enter your first name !"),
    last_name: Yup.string().required("Enter your last name !"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Enter you password"),
    password_confirmation: Yup.string().required("Confirm password"),
  });
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <Formik
            className="card-body"
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <Field
                    name="first_name"
                    placeholder="John"
                    className="input input-bordered"
                  />
                  <ErrorMessage
                    name="first_name"
                    component={"p"}
                    className="text-red-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <Field
                    name="last_name"
                    placeholder="Smith"
                    className="input input-bordered"
                  />
                  <ErrorMessage
                    name="last_name"
                    component={"p"}
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  name="email"
                  placeholder="example@go.com"
                  className="input input-bordered"
                />
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="text-red-600"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  name="password"
                  placeholder="Enter a strong password"
                  className="input input-bordered"
                />
                <ErrorMessage
                  name="password"
                  component={"p"}
                  className="text-red-600"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <Field
                  name="password_confirmation"
                  placeholder="Confirm your password password"
                  className="input input-bordered"
                />
                <ErrorMessage
                  name="password_confirmation"
                  component={"p"}
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <Field type="checkbox" className="mr-1" />
                  <label className="label">
                    <div className="label-text-alt ">
                      Agree with{" "}
                      <a href="#" className="text-pink-700 link link-hover">
                        Terms & Condition
                      </a>{" "}
                    </div>
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

          <div className="text-center ">
            <p>
              Already have an acount{" "}
              <a href="#" className="text-pink-700">
                Login
              </a>{" "}
            </p>
            <label className="label">Or</label>

            <div className="form-control mt-6">
              <button className="btn text-black w-full">
                {/* <FaGoogle /> */}
                Login with google
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-black w-full">
                {/* <FaFacebook /> */}
                Login with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
