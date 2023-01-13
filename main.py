import time

moisture_level = 50

while True:
    if moisture_level < 30:
        print("Watering garden...")
        # Code to activate watering system here
        moisture_level += 20
    else:
        print("Moisture level is sufficient. Checking again in 1 hour.")
    time.sleep(3600)
