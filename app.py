from flask import Flask, render_template

app = Flask(__name__)


# HOME
@app.route("/")
def home():
    return render_template("index.html")


# ABOUT US
@app.route("/about")
def about():
    return render_template("about.html")


# JOURNAL
@app.route("/journal")
def journal():
    return render_template("journal.html")


# ARTICLE - VITAMIN C
@app.route("/journal/vitamin-c")
def vitamin_c():
    return render_template("articles/vitamin-c.html")


# ARTICLE - WELLNESS ROUTINE
@app.route("/journal/wellness-routine")
def wellness_routine():
    return render_template("articles/wellness-routine.html")


# ARTICLE - WHY VITLS
@app.route("/journal/why-vitls")
def why_vitls():
    return render_template("articles/why-vitls.html")


if __name__ == "__main__":
    app.run(debug=True)