import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {

  const {email, nombre, token} = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: 'UpTask - Administradode proyectos',
    to: email,
    subject: "UpTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
      <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el sgt enlace:
      <a href = "https://frontenduptask.vercel.app/confirmar/${token}">Comprobar Cuenta</a>
      <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
      </p>`
  })
  

}

export const emailOlvidePassword = async (datos) => {

  const {email, nombre, token} = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: 'UpTask - Administradode proyectos',
    to: email,
    subject: "UpTask - Restablece tu Password",
    text: "Restablece tu Password",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
      <p>Sigue el sgt enlace para generar un nuevo password:
      <a href = "${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a>
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      </p>`
  })
  

}