import { Heading } from '../Heading'
import Text from '../Text'
import styles from './StatusCodeError.module.scss'

interface StatusCodeErrorProps {
  statusCode: number
  error?: Error | string 
}

type Error = {
  title: string
  message: string
}

const getHumanReadableError = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return {
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.'
      }
    case 500:
      return {
        title: 'Internal Server Error',
        message: 'Something went wrong on our end.'
      }
    default:
      return {
        title: 'Unknown Error',
        message: 'Something went wrong.'
      }
  }
}

export const StatusCodeError: React.FC<StatusCodeErrorProps> = (props) => {
  const { title, message } = getHumanReadableError(props.statusCode)
  
  return <div className={styles.StatusCodeError}>
    <Heading>{ title }</Heading>
    <Text>{ message }</Text>
  </div>
}