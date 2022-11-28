import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  warriors: [],
};

const config = {
  headers: {
    "Content-Type": "application/json",
    "probnet-api-key":
      "4yzue98KoU3r8aXjiDv3SEN6ex2wCZN38AVlbqqQhw5We2rufjuqa1D15zucxSPD",
  },
};

export const getWarriors = createAsyncThunk("getWarriors", async () => {
  try {
    const res = await axios.get("/api/warriors", config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const addWarrior = createAsyncThunk("addWarrior", async (warrior) => {
  try {
    const res = await axios.post("/api/warriors", warrior, config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const removeWarrior = createAsyncThunk(
  "removeWarrior",
  async (warriorId) => {
    try {
      const res = await axios.delete("/api/warriors", {
        headers: {
          "Content-Type": "application/json",
          "probnet-api-key":
            "4yzue98KoU3r8aXjiDv3SEN6ex2wCZN38AVlbqqQhw5We2rufjuqa1D15zucxSPD",
        },
        data: {
          id: warriorId,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addSkill = createAsyncThunk("addSkill", async (skill) => {
  try {
    const res = await axios.post("/api/skills", skill, config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const removeSkill = createAsyncThunk("removeSkill", async (skillId) => {
  try {
    const res = await axios.delete("/api/skills", {
      headers: {
        "Content-Type": "application/json",
        "probnet-api-key":
          "4yzue98KoU3r8aXjiDv3SEN6ex2wCZN38AVlbqqQhw5We2rufjuqa1D15zucxSPD",
      },
      data: {
        id: skillId,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const warriorSlice = createSlice({
  name: "warrior",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWarriors.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getWarriors.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(getWarriors.fulfilled, (state, action) => {
      state.loading = false;
      state.warriors = action.payload.data;
      console.log(action.payload);
    });
    builder.addCase(addWarrior.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(addWarrior.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(addWarrior.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(removeWarrior.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(removeWarrior.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(removeWarrior.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addSkill.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(addSkill.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(addSkill.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(removeSkill.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(removeSkill.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(removeSkill.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = warriorSlice.actions;
export default warriorSlice.reducer;
