FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./web/app /usr/share/nginx/html

#RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY app /usr/share/nginx/html
#COPY conf /etc/nginx
