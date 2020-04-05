import React from 'react';
import Form from '../../../components/atoms/Form';
import Input from '../../../components/atoms/Input';
import Submit from '../../../components/atoms/Submit';
import FormButton from '../../../components/atoms/FormButton';
import setTitle from '../../../utils/setTitle';

const UpdatePostByIdPresenter = ({ formData, handleSubmit, handleChange, onClickMoveToBack }) => {
  return (
    <>
      {setTitle('Update Post')}
      <Form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          placeholder={'Title'}
          value={formData.title}
          name={'title'}
          onChange={handleChange}
        />
        <Input
          type={'text'}
          placeholder={'Description'}
          value={formData.description}
          name={'description'}
          onChange={handleChange}
        />
        <Input
          type={'text'}
          placeholder={'Image URL'}
          value={formData.imgUrl}
          name={'imgUrl'}
          onChange={handleChange}
        />
        <Submit btnText={'수정하기'} />
        <FormButton
          bgColor={'blue'}
          onClick={(e) => {
            e.preventDefault();
            onClickMoveToBack();
          }}
          btnText={'이전'}
        />
      </Form>
    </>
  );
};

export default UpdatePostByIdPresenter;
