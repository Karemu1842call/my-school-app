class SchoolsController < ApplicationController
    def index
        schools=School.all
        render json:schools
    end
    def show
        schools=School.find_by(id: params[:id])
        if schools
            render json:schools, status: :ok
        else
            render json: {error:"No such school exists"}, status: :not_found
        end
    end
    def update
        schools = School.find_by(id: params[:id])
        if schools
          schools.update(school_params)
          render json: schools
        else
          render json: { error: "School not found" }, status: :not_found
        end
      end
      private
      def school_params
        params.permit(:sch_avatar)
      end
end
