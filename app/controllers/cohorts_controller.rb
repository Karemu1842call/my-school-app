class CohortsController < ApplicationController
    def index
        cohorts=Cohort.all
        render json:cohorts
    end
    def show
        cohorts=Cohort.find_by(id: params[:id])
        if cohorts
            render json:cohorts, status: :ok
        else
            render json: {error:"No such cohort exists"}, status: :not_found
        end
    end
end
