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
    if session[:user_id].present? 
      @current_user = User.find_by(id: session[:user_id]) 
    elsif cookies.signed[:user_id].present? 
      user = User.find_by(id: cookies.signed[:user_id])
      if user && user.authenticate(cookies[:remember_token]) 
        session[:user_id] = user.id 
        @current_user = user
      end
    end
  
    unless @current_user 
      flash[:danger] = "Please log in."
      redirect_to login_url
    end
  end
  
end
