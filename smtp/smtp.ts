import * as SMTP from './smtp_core';

export async function sendMail(name, email, body) {
    const send = SMTP.Email.send({
        SecureToken : "53e41aa9-fd4d-46fc-825b-0e7908323f2d",
        To : 'portfolioraphaeltorres@gmail.com',
        From : 'portfolioraphaeltorres@gmail.com',
        Subject : `Mail provenant du portfolio de ${name}`,
        Body : `Mail provenant de ${name}, son adresse mail est: ${email}, et son message est: <br> ${body}`
    }).catch(err => err)
    return send;
}
