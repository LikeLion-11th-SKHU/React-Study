import { useRef, useCallback } from 'react'
import { Title } from '../../components'
import { ValidatableInputMethods } from '../theme/daisyui'
import { ValidatableInput } from '../theme/daisyui'

export default function ValidatableInputTest() {
  const methodRef = useRef<ValidatableInputMethods>(null)

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate()
      if  (valid) alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다.`)
      else alert(valueOrErrorMessage)
    }
  }, [])


}

export type validatableInputMethods = {
  validate: () => [boolean, string]
}


