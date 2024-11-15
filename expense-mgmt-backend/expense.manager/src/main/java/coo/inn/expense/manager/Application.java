package coo.inn.expense.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "coo.inn.expense.manager.configs.baseImplemantaions.feignClient")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
