export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
        secure: true,
      })

      const mailData = {
        from: process.env.EMAIL,
        to: 'contato@wunjo.com.br',
        cc: req.body.email,
        subject: `Solicitação de contato feita pelo site`,
        text:   req.body.mensagem + 
                " | Solicitação de: " + req.body.nome + 
                " | Telefone: " + req.body.telefone + 
                " | Email: " + req.body.email,
        html: ` <p>Nome: ${req.body.nome}</p>
                <p>Email: ${req.body.email}</p>
                <p>Telefone: ${req.body.telefone}</p><br>
                <p>Mensagem:</p>
                <div>${req.body.mensagem}</div>
              `
      }

      transporter.sendMail(mailData, function (err, info) {
        if(err)
          res.status(400),
          console.log(err)
          
        else
          console.log(info)
          res.send('success')
          res.status(200)
      })
}