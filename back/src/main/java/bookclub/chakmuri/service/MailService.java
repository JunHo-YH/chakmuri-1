package bookclub.chakmuri.service;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class MailService {

    private JavaMailSender mailSender;

    public void mailSend(String address, String subject, String text){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(address);
        message.setFrom("noreply@chakmuri.club"); //현재 동작되지 않음.
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);
    }
}
