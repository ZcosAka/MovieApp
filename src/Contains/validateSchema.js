import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Vui lòng nhập domain email ')
    .required('Vui lòng nhập email!'),
  password: yup
    .string()
    .min(8, ({min}) => `Password phải lớn hơn ${min} kí tự`)
    .required('Vui lòng nhập password!'),
  confirPassword: yup
    .string()
    .min(8, ({min}) => `Password phải lớn hơn ${min} kí tự`)
    .required('Vui lòng xác nhận password!'),
  fullName: yup
    .string()
    .required('Vui lòng nhập họ tên!'),
});
