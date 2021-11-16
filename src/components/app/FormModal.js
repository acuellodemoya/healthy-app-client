import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { quitarSeleccion, updateDoctor } from '../../state/actions/doctor';
import { setModalClose } from '../../state/actions/ui';


Modal.setAppElement('#root');

export const FormModal = () => {
  const dispatch = useDispatch()
  const { modalOpen } = useSelector(state => state.ui)
  const { activo } = useSelector(state => state.doctor)

  const [ values, handleInputChange ] = useForm({
    nombresForm: '',
    apellidosForm: '',
    telefonoForm: ''
  })


  const { nombresForm, apellidosForm, telefonoForm } = values

  const closeModal = () => {
    dispatch( setModalClose() )
    dispatch( quitarSeleccion() )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = activo;
    const doctorActualizado = {
      email,
      nombresForm,
      apellidosForm,
      telefonoForm
    }
    dispatch( updateDoctor( doctorActualizado ) )
  }

  return (
    <Modal
      isOpen={ modalOpen }
      // onAfterOpen={ afterOpenModal }
      onRequestClose={ closeModal }
      closeTimeoutMS={ 200 }
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>Modificar Doctor</h1>
      <hr />
      <form onSubmit={ handleSubmit } className="form-container">

        <hr />
        <div className="form-group">
          <label>Nombres</label>
          <br/>
          <input 
            type="text" 
            className="form-control"
            placeholder="Nombres"
            autoComplete="off"
            name="nombresForm"
            value={ nombresForm }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <label>Apellidos</label>
          <br/>
          <input 
            type="text" 
            className="form-control"
            placeholder="Apellidos"
            autoComplete="off"
            name="apellidosForm"
            value={ apellidosForm }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <label>Telefono</label>
          <br/>
          <input 
            type="number" 
            className="form-control"
            placeholder="telefono"
            autoComplete="off"
            name="telefonoForm"
            value={ telefonoForm }
            onChange={ handleInputChange }
          />
        </div>

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
