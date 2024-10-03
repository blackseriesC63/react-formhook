import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './validators/registerValidator'

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h4 style={{fontSize:'22px', fontFamily: 'Arial, Helvetica, sans-serif'}}>Signup</h4>

        <input {...register('username')} placeholder="Username" />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message?.toString()}</p>}
        <input {...register('email')} placeholder="Email" />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message?.toString()}</p>}
        <input {...register('password')} placeholder="Password" type="password" />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message?.toString()}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
