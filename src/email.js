/* eslint-disable no-undef */
export default function ContactForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      const emailParams = {
        to_email: data.toEmailAddress,
        message: data.message
      };
      emailjs.send('<service_acdcbmh', 'template_64w23m1', emailParams, 'ruperth')
        .then((response) => {
          console.log('Email sent!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="toEmailAddress" ref={register({ required: true })} />
        {errors.toEmailAddress && <span>This field is required</span>}
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && <span>This field is required</span>}
        <button type="submit">Send Email</button>
      </form>
    );
  }