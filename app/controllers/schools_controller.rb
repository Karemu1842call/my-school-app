class SchoolsController < ApplicationController
  before_action :authorize

  def index
    schools = School.all
    render json: schools
  end

  def show
    schools = School.find(params[:id])
    render json: schools
  rescue ActiveRecord::RecordNotFound
    render json: { error: "No such school exists" }, status: :not_found
  end

  def create
    schools = School.new(school_params)
  
    if schools.save
      render json: schools, status: :created
    else
      render json: { errors: schools.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    puts "params[:id]: #{params[:id]}"
    schools = School.find(params[:id])

    if schools.update(school_params)
      render json: schools
    else
      render json: { errors: schools.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "No such school exists" }, status: :not_found
  end

  def destroy
    schools = School.find(params[:id])
    schools.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound
    render json: { error: "No such school exists" }, status: :not_found
  end

  private

  def school_params
    params.permit(:sch_name, :sch_email, :sch_avatar, :sch_telno)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
