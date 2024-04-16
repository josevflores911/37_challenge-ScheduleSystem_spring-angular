<h1>Hola!!</h1>

to start: 
<ul>
  <li>npm i</li>
  <li>ng serve</li>
</ul>

![gatito](https://github.com/josevflores911/Schedule_system/assets/59713685/338d6ee7-44b0-4a23-b3c2-ac67cca8d11d)


Dockerfile

# Stage 1: Create Docker network
FROM alpine:latest AS network-creator
RUN apk add --no-cache docker
RUN docker network create --driver bridge redapiname

# Stage 2: Run MySQL container
FROM mysql:8.0 AS mysql-container
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes
RUN docker container run -d -p 3306:3306 --network redapiname --name mysqlname mysql:8.0

# Stage 3: Run main application container
FROM imagename AS app-container
ENV DB_HOST=mysqlname
ENV DB_PASSWORD=2812
RUN docker container run --rm -p 8080:8080 --network redapiname imagename


bugs:
<ul>
  <li>.</li>
  <li>.</li>
</ul>

<img src="https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/350495f2-0d73-4b19-a9b9-57d7f2ff17b4" alt="home page" width="400">
<!-- ![home page](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/350495f2-0d73-4b19-a9b9-57d7f2ff17b4 ) -->

<img src="[https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/350495f2-0d73-4b19-a9b9-57d7f2ff17b4](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/c3e0a331-24a9-48b5-8d3e-65ada7cdac79)" alt="login" width="400">
<!-- ![login](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/c3e0a331-24a9-48b5-8d3e-65ada7cdac79 | width=400) -->

![look patient ifnot add patient](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/f007e49b-b0ee-4303-a3e8-0d60fbfd10a7 | width=400)

![new patient error after save url schedle empty](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/7e0b7b20-2814-4713-8af0-3a0bb5244f63 | width=400)

![patient found without priority](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/f4a1dce6-3d39-48c4-81ce-3d8f63faf166 | width=400)

![pacientes agendados](https://github.com/josevflores911/challenge-ScheduleSystem/assets/59713685/082f68d5-ce48-4ac0-9a3d-a7c7f2dd2abb | width=400)
