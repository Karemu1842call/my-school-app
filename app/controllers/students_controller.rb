class StudentsController < ApplicationController
    wrap_parameters format: []
  def index
    students = Student.all
    render json: students
  end

  def show
    students = Student.find_by(id: params[:id])
    if students
      render json: students, status: :ok
    else
      render json: { error: "No such Student exists" }, status: :not_found
    end
  end

  def destroy
    students = Student.find_by(id: params[:id])
    if students
      students.destroy
      head :no_content
    else
      render json: { error: "students not found" }, status: :not_found
    end
  end

  def create
    students = Student.create(student_params)
    if students.save
      render json: students, status: :created
    else
      render json: { error: "Student not created" }, status: :not_found
    end
  end

  def update
    students = Student.find_by(id: params[:id])
    if students
      students.update(student_params)
      render json: students
    else
      render json: { error: "student not found" }, status: :not_found
    end
  end

  private

  def student_params
    params.permit(:name, :email, :image, :id, :created_at, :updated_at)
  end
end
