create table users (
  id serial primary key,
  name text not null,
  birthday timestamptz not null
);

insert into users(name, birthday) values
  ('山田太郎', '1970-01-01T00:00:00+00:00'),
  ('田中花子', '1972-02-22T00:00:00+00:00');
