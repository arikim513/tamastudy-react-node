import * as Yup from 'yup';

export const yupValidate = Yup.object({
  title: Yup.string().max(20, '20자 이내로 입력해주세요. ').required('타이틀을 입력해주세요. '),
  description: Yup.string()
    .max(1000, '1000자 이내로 입력해주세요. ')
    .required('본문을 입력해주세요. '),
  imgUrl: Yup.string()
    .max(1000, '정상적인 url이 아닙니다.  ')
    .required('img url을 입력해주세요. ')
    .matches(
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      'http 혹은 https 양식을 맞춰주세요. ',
    ),
});
