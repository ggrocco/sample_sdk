package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

// Job
type Job struct {
	Id          int    `json:"id,omitempty"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

var MemoryDb = []Job{
	{
		Id:          1,
		Name:        "Job 1",
		Description: "Description job 1",
	},
	{
		Id:          2,
		Name:        "Job 2",
		Description: "Description job 2",
	},
}

// @Summary		Get all job
// @Description	Get all job
// @Accept		json
// @Produce		json
// @Success		200	{object}	Job
// @Router		/jobs [get]
func GetJobs(c echo.Context) error {
	return c.JSON(http.StatusOK, MemoryDb)
}
