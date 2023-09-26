(1) Salesman table 

CREATE TABLE salesman(salesman_id int ,
                      name varchar (100),
                      city varchar (100),
                      commission varchar (20),
                     PRIMARY key (salesman_id));

insert into salesman(salesman_id,name,city,commission) values (5001,"James Hoog","New York",0.15)
insert into salesman(salesman_id,name,city,commission) values (5002,"Nail Knite","Paris",0.13)
insert into salesman(salesman_id,name,city,commission) values (5005,"Pit Alex","Lomdon",0.11)
insert into salesman(salesman_id,name,city,commission) values (5006,"Mc Lyon","Paris",0.14)
insert into salesman(salesman_id,name,city,commission) values (5007,"Paul Adam","Rome",0.13)
insert into salesman(salesman_id,name,city,commission) values (5003,"Lauson Hen","San Jose",0.12)



(2) custromer table 

create table customer(customer_id int ,
                     cust_name varchar (100),
                     city varchar (100),
                     grade varchar (100),
                     salesman_id int ,
                     PRIMARY key (customer_id),
                     FOREIGN key (salesman_id) REFERENCES salesman(salesman_id));


INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3002,"Nick Rimando","New York",100,5001)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3007,"Brad Davis","New York",200,5001)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3005,"Graham Zusi","California",200,5002)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3008,"Julian Green","London",300,5002)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3004,"Fabian Johnson","Paris",300,5006)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3009,"Geoff Cameron","Berlin",100,5003)
INSERT INTO customer(customer_id,cust_name,city,grade,salesman_id) VALUES (3003,"Jozy Altidor","Moscow",200,5007)
INSERT INTO customer(customer_id,cust_name,city,salesman_id) VALUES (3001,"Brad Guzan","London",5005)

SELECT salesman.name AS "Salesman",
customer.cust_name, customer.city 
FROM salesman,customer 
WHERE salesman.city=customer.city;
