import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { addPatient } from '../../state/actions/patient';
import { setModalClose } from '../../state/actions/ui';
import { InputForm } from './InputForm';


Modal.setAppElement('#root');

export const PatientModal = () => {
  const dispatch = useDispatch()
  const { modalOpen } = useSelector(state => state.ui)

  const [ values, handleInputChange ] = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: 0,
    fecha_nacimiento: '',
    sexo:'',
    tipo_sangre: '',
    tipo_seguro: ''
  })

  const { nombres, apellidos, email, telefono, fecha_nacimiento, sexo, tipo_sangre, tipo_seguro } = values

  const closeModal = () => {
    dispatch( setModalClose() )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( addPatient( values ) )
  }

  return (
    <Modal
      isOpen={ modalOpen }
      onRequestClose={ closeModal }
      closeTimeoutMS={ 200 }
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>Agregar Paciente</h1>
      <hr />
      <form onSubmit={ handleSubmit } className="form-container">

        <hr />
        <InputForm
          label={"Nombres"}
          type={"text"}
          name={"nombres"}
          value={nombres}
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Apellidos"}
          type={"text"}
          name={"apellidos"}
          value={apellidos}
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Email"}
          type={"email"}
          name={"email"}
          value={ email }
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Telefono"}
          type={"number"}
          name={"telefono"}
          value={ telefono }
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Fecha de nacimiento"}
          type={"date"}
          name={"fecha_nacimiento"}
          value={ fecha_nacimiento }
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Sexo"}
          type={"text"}
          name={"sexo"}
          value={ sexo }
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Tipo de sangre"}
          type={"text"}
          name={"tipo_sangre"}
          value={ tipo_sangre }
          onChange={ handleInputChange }
        />
        <InputForm
          label={"Tipo de seguro"}
          type={"text"}
          name={"tipo_seguro"}
          value={ tipo_seguro }
          onChange={ handleInputChange }
        />
        <button
          type="submit"
          className=""
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  )
}
