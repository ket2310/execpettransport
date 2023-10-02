function freeQuoteForm() {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{props.riderLesson.rider.firstName}</h3>
        <span className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </span>
        {props.children}
        <form className="lessonForm" onSubmit={handleFormSubmit}>
          <div>
            <label> Date:</label>&nbsp;
            <input
              text={bookedDate}
              value={bookedDate}
              name="lessonDate"
              onChange={handleInputChange}
              type="text"
              placeholder="Lesson Date"
            />
          </div>
          <div>
            <label> Time:</label>&nbsp;
            <input
              value={convertHour(startTime) || {}}
              name="startTime"
              onChange={handleInputChange}
              type="text"
              placeholder="Start Time"
            />
          </div>
          <div>
            <label>Rider: </label>&nbsp;
            <select name="rider" onChange={handleInputChange}>
              <option defaultValue>
                {props.riderLesson.rider.firstName +
                  " " +
                  props.riderLesson.rider.lastName}{" "}
              </option>
              {riders &&
                riders.map((rider) => (
                  <option value={rider._id} key={rider._id}>
                    {rider.firstName + " " + rider.lastName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Instructor: </label>&nbsp;
            <select name="instructor" onChange={handleInputChange}>
              <option defaultValue>
                {props.riderLesson.instructor.firstName +
                  " " +
                  props.riderLesson.instructor.lastName}
              </option>
              {instructors &&
                instructors.map((instructor) => (
                  <option value={instructor._id} key={instructor._id}>
                    {instructor.firstName + " " + instructor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Horse: </label>&nbsp;
            <select name="horse" onChange={handleInputChange}>
              <option defaultValue>{props.riderLesson.horse.name}</option>
              {horses &&
                horses.map((horse) => (
                  <option value={horse._id} key={horse._id}>
                    {horse.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Duration</label>&nbsp;
            <select name="duration" onChange={handleInputChange}>
              <option value="1">1 hour</option>
              <option value="30">30 minutes</option>
            </select>
          </div>
          {props.riderLesson ? (
            ""
          ) : (
            <button
              type="button"
              id="bookTime"
              onClick={(e) => handleFormSubmit(e)}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default freeQuoteForm;
