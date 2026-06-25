USE OnlineRetailStore;
GO

DROP PROCEDURE IF EXISTS sp_GetEmployeeCountByDepartment;
GO

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 101;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 102;