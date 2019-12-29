import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { connect } from 'react-redux'
import { createLinkRequest, getAllLinksRequest } from '../../store/modules/linksModule/linksActions'

const initialState = { from: '' }

const CreatePage = ({ createLinkRequest, getAllLinksRequest }) => {
  const [values, handleChange, setValues] = useForm(initialState)

  useEffect(() => {
    getAllLinksRequest()
    window.M.updateTextFields()
  }, [getAllLinksRequest])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      console.log('handleKeyPress => ', values)
      createLinkRequest(values)
      setValues(initialState)
    }
  }

  return (
    <div className="row">
      <div className="col 10 offset-s2 p-top">
        <div className="input-field">
          <input id="from" type="text" className="validate" name="from" value={values.from} onChange={handleChange} onKeyPress={handleKeyPress} />
          <label htmlFor="from">Enter your link</label>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => ({}), { createLinkRequest, getAllLinksRequest })(CreatePage)
