USE OnlineRetailStore;
GO

-- Agar procedure pehle se ho to delete kar do
DROP PROCEDURE IF EXISTS sp_GetEmployeesByDepartment;
GO

-- Agar table pehle se ho to delete kar do
DROP TABLE IF EXISTS Employees;
GO

-- Employees table create
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE
);
GO

-- Sample data insert
INSERT INTO Employees VALUES
(1,'Ayush','Raj',101,50000,'2025-01-10'),
(2,'Rahul','Kumar',101,45000,'2025-02-15'),
(3,'Priya','Sharma',102,60000,'2025-03-20'),
(4,'Ankit','Singh',103,55000,'2025-04-25');
GO

-- Stored Procedure create
CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- Procedure test
EXEC sp_GetEmployeesByDepartment @DepartmentID = 101;
GO