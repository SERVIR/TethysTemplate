from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from tethys_sdk.gizmos import Button


def home(request):
    """
    Controller for the app home page.
    """


    context = {

    }

    return render(request, 'template/home.html', context)

def semantic(request):
    """
    Controller for the app home page.
    """


    context = {

    }

    return render(request, 'template/semantic.html', context)