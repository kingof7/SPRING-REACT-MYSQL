CREATE USER 'developer' @'%' IDENTIFIED BY 'P!ssw0rd';

# grant to 'developer'@'*'
GRANT SELECT, UPDATE, DELETE, INSERT ON board.* TO 'developer' @'%';