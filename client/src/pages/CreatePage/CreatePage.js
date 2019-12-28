import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createLinkRequest } from '../../store/modules/linksModule/linksActions'

const initialState = { from: '' }

const CreatePage = ({ createLinkRequest }) => {
  const [values, handleChange, setValues] = useForm(initialState)
  const history = useHistory()

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const handleKeyPress = () => {
    console.log('implement', values)
    createLinkRequest(values)
    setValues(initialState)
  }

  return (
    <div className="row">
      <div className="col 8 offset-s2 p-top">
        <div className="input-field">
          <input id="from" type="text" className="validate" name="from" value={values.from} onChange={handleChange} onKeyPress={handleKeyPress} />
          <label htmlFor="from">Enter your link</label>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => ({}), { createLinkRequest })(CreatePage)
