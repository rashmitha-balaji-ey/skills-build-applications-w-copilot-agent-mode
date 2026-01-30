from django.core.management.base import BaseCommand

from octofit_tracker.models import Team, User, Activity, Workout, Leaderboard
from django.utils import timezone
from django.conf import settings
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'



    def handle(self, *args, **options):
        # Drop collections directly to avoid ORM delete issues
        db = connection.cursor().db_conn.client[settings.DATABASES['default']['NAME']]
        db.leaderboard.drop()
        db.activity.drop()
        db.workout.drop()
        db.user.drop()
        db.team.drop()


        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Team Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='Team DC Superheroes')

        # Create Users
        tony = User.objects.create(name='Tony Stark', email='tony@marvel.com', team=marvel)
        steve = User.objects.create(name='Steve Rogers', email='steve@marvel.com', team=marvel)
        bruce = User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team=dc)
        clark = User.objects.create(name='Clark Kent', email='clark@dc.com', team=dc)

        # Create Workouts
        iron_workout = Workout.objects.create(name='Iron Endurance', description='Stark-level endurance training', suggested_for='Marvel')
        shield_training = Workout.objects.create(name='Shield Strength', description='Super soldier strength', suggested_for='Marvel')
        bat_training = Workout.objects.create(name='Bat Agility', description='Wayne agility drills', suggested_for='DC')
        krypton_training = Workout.objects.create(name='Krypton Power', description='Superman power workout', suggested_for='DC')

        # Create Activities
        Activity.objects.create(user=tony, activity_type='Running', duration=30, date=timezone.now().date())
        Activity.objects.create(user=steve, activity_type='Cycling', duration=45, date=timezone.now().date())
        Activity.objects.create(user=bruce, activity_type='Martial Arts', duration=60, date=timezone.now().date())
        Activity.objects.create(user=clark, activity_type='Flying', duration=120, date=timezone.now().date())

        # Create Leaderboard
        Leaderboard.objects.create(user=tony, score=100, rank=1)
        Leaderboard.objects.create(user=steve, score=90, rank=2)
        Leaderboard.objects.create(user=bruce, score=80, rank=3)
        Leaderboard.objects.create(user=clark, score=70, rank=4)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data!'))
