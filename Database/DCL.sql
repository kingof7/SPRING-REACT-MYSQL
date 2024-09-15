-- Active: 1725702139114@@localhost@3306@board
CREATE USER 'developer' @'%' IDENTIFIED BY 'P!ssw0rd';

# grant to 'developer'@'*'
GRANT SELECT, UPDATE, DELETE, INSERT ON board.* TO 'developer' @'%';