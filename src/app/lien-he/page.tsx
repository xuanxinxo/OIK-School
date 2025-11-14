"use client";

import React, { useEffect } from "react";

export default function LienHePage() {
  useEffect(() => {
    const userDB: Record<string, string> = {};
    let favoriteSubjects: string[] = [];
    let selectedCount = 0;

    const loginCard = document.getElementById("loginCard")!;
    const subjectSelect = document.getElementById("subjectSelect")!;
    const allSubjects = document.getElementById("allSubjects")!;
    const subjectGrid = document.getElementById("subjectGrid")!;
    const subjects = document.querySelectorAll(".subject-card");

    (window as any).showRegister = function () {
      document.getElementById("loginForm")!.classList.add("hidden");
      document.getElementById("registerForm")!.classList.remove("hidden");
      document.getElementById("loginTitle")!.innerText = "Đăng ký";
    };

    (window as any).showLogin = function () {
      document.getElementById("registerForm")!.classList.add("hidden");
      document.getElementById("loginForm")!.classList.remove("hidden");
      document.getElementById("loginTitle")!.innerText = "Đăng nhập";
    };

    (window as any).register = function () {
      const u = (document.getElementById("regUser") as HTMLInputElement).value;
      const p1 = (document.getElementById("regPass1") as HTMLInputElement).value;
      const p2 = (document.getElementById("regPass2") as HTMLInputElement).value;
      if (!u || !p1 || !p2) return alert("Vui lòng nhập đầy đủ thông tin!");
      if (p1 !== p2) return alert("Mật khẩu nhập lại không khớp!");
      userDB[u] = p1;
      alert("Đăng ký thành công!");
      (window as any).showLogin();
    };

    (window as any).login = function () {
      const u = (document.getElementById("loginUser") as HTMLInputElement).value;
      const p = (document.getElementById("loginPass") as HTMLInputElement).value;
      if (!userDB[u]) return alert("Tài khoản không tồn tại!");
      if (userDB[u] !== p) return alert("Sai mật khẩu!");
      loginCard.classList.add("fade-out");
      setTimeout(() => {
        document.body.style.background = "white";
      }, 800);
      setTimeout(() => {
        loginCard.style.display = "none";
        subjectSelect.style.display = "flex";
      }, 1500);
    };

    subjects.forEach((s) => {
      s.addEventListener("click", () => {
        if (s.classList.contains("selected")) {
          s.classList.remove("selected");
          selectedCount--;
        } else if (selectedCount < 3) {
          s.classList.add("selected");
          selectedCount++;
        } else alert("Bạn chỉ được chọn tối đa 3 môn!");
      });
    });

    (window as any).finish = function () {
      favoriteSubjects = Array.from(subjects)
        .filter((s) => s.classList.contains("selected"))
        .map((s) => s.textContent || "");
      if (favoriteSubjects.length === 0) return alert("Hãy chọn ít nhất 1 môn!");
      subjectSelect.style.display = "none";
      (window as any).showAllSubjects();
    };

    (window as any).showAllSubjects = function () {
      const all = [
        "Toán",
        "Vật Lí",
        "Hóa Học",
        "Anh Văn",
        "Sinh Học",
        "Ngữ Văn",
        "Địa Lí",
        "Lịch Sử",
        "Kinh Tế & Pháp Luật",
        "Tin Học",
      ];
      subjectGrid.innerHTML = "";
      all.forEach((sub) => {
        const d = document.createElement("div");
        d.className =
          "subject-box" + (favoriteSubjects.includes(sub) ? " highlight" : "");
        d.innerHTML = `<h2>${sub}</h2><button class='btn' onclick="openSubject('${sub}')">Xem thêm</button>`;
        subjectGrid.appendChild(d);
      });
      allSubjects.style.display = "flex";
    };

    (window as any).openSubject = function (name: string) {
      document.getElementById("subjectTitle")!.innerText = "Môn " + name;
      document.getElementById("aiSubject")!.innerText = name;
      allSubjects.style.display = "none";
      document.getElementById("subjectDetail")!.style.display = "flex";
    };

    (window as any).backToSubjects = function () {
      document.getElementById("subjectDetail")!.style.display = "none";
      allSubjects.style.display = "flex";
    };

    (window as any).saveNotes = function () {
      const n = (document.getElementById("taskNotes") as HTMLTextAreaElement)
        .value;
      alert("Đã lưu ghi chú: " + n);
    };

    (window as any).startMic = function () {
      alert("🎤 Chức năng mic sẽ được bổ sung sau!");
    };
  }, []);

  return (
    <div>
      {/* ✅ CSS làm lại hiện đại hơn */}
      <style jsx>{`
        body {
          background: linear-gradient(135deg, #d4fc79, #96e6a1);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: "Poppins", sans-serif;
          transition: background 1s ease-in-out;
          overflow: hidden;
        }

        .card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          padding: 40px 30px;
          text-align: center;
          width: 340px;
          transition: all 0.5s ease;
        }

        h1 {
          color: #2e7d32;
          margin-bottom: 20px;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #c8e6c9;
          border-radius: 10px;
          font-size: 15px;
          transition: border-color 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: #43a047;
        }

        .button {
          background-color: #43a047;
          color: white;
          font-weight: 500;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .button:hover {
          background-color: #2e7d32;
          transform: scale(1.05);
        }

        .fade-out {
          opacity: 0;
          transform: scale(0.95);
        }

        .hidden {
          display: none;
        }

        .subject-selection,
        .all-subjects,
        .subject-detail {
          display: none;
          flex-direction: column;
          align-items: center;
          background: #f9fff9;
          width: 100%;
          height: 100vh;
          padding: 30px;
          overflow-y: auto;
          animation: fadeIn 0.8s ease;
        }

        .subject-selection h2 {
          color: #2e7d32;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .subjects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 15px;
          width: 100%;
          max-width: 700px;
        }

        .subject-card {
          background: #e8f5e9;
          border-radius: 15px;
          padding: 15px;
          text-align: center;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .subject-card.selected {
          background: #81c784;
          color: white;
          transform: scale(1.05);
        }

        .subject-card:hover {
          background: #c8e6c9;
        }

        .subject-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          width: 90%;
          max-width: 900px;
          margin-top: 20px;
        }

        .subject-box {
          background: #ffffff;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          text-align: center;
          padding: 20px;
          transition: 0.3s ease;
        }

        .subject-box.highlight {
          background: #81c784;
          color: white;
        }

        .subject-box .btn {
          background: #43a047;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s ease;
        }

        .subject-box .btn:hover {
          background: #2e7d32;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 1100px;
          margin-top: 20px;
        }

        .detail-box {
          background: #ffffff;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .detail-box:hover {
          transform: translateY(-4px);
        }

        textarea {
          width: 100%;
          height: 80px;
          border-radius: 10px;
          padding: 10px;
          border: 1px solid #c8e6c9;
          resize: none;
          transition: border-color 0.3s ease;
        }

        textarea:focus {
          outline: none;
          border-color: #43a047;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>


      <div className="card" id="loginCard">
        <h1 id="loginTitle">Đăng nhập</h1>
        <div id="loginForm">
          <input type="text" id="loginUser" placeholder="Tên đăng nhập" />
          <input type="password" id="loginPass" placeholder="Mật khẩu" />
          <button className="button" onClick={() => (window as any).login()}>
            Đăng nhập
          </button>
          <p
            style={{ color: "white", marginTop: "10px", cursor: "pointer" }}
            onClick={() => (window as any).showRegister()}
          >
            Chưa có tài khoản? Đăng ký
          </p>
        </div>

        <div id="registerForm" className="hidden">
          <input type="text" id="regUser" placeholder="Tên đăng nhập" />
          <input type="password" id="regPass1" placeholder="Mật khẩu" />
          <input type="password" id="regPass2" placeholder="Nhập lại mật khẩu" />
          <button className="button" onClick={() => (window as any).register()}>
            Xác nhận đăng ký
          </button>
          <p
            style={{ color: "white", marginTop: "10px", cursor: "pointer" }}
            onClick={() => (window as any).showLogin()}
          >
            Đã có tài khoản? Đăng nhập
          </p>
        </div>
      </div>

      {/* Phần chọn môn, danh sách và chi tiết môn */}
      <div
        className="subject-selection hidden"
        id="subjectSelect"
        style={{ display: "none" }}
      >
        <h2>Chọn 3 môn học bạn yêu thích</h2>
        <div className="subjects" id="subjectList">
          {[
            "Toán",
            "Vật Lí",
            "Hóa Học",
            "Anh Văn",
            "Sinh Học",
            "Ngữ Văn",
            "Địa Lí",
            "Lịch Sử",
            "Kinh Tế & Pháp Luật",
            "Tin Học",
          ].map((sub, i) => (
            <div key={i} className="subject-card">
              {sub}
            </div>
          ))}
        </div>
        <button
          className="button"
          style={{ marginTop: "25px" }}
          onClick={() => (window as any).finish()}
        >
          Hoàn tất đăng ký
        </button>
      </div>

      <div className="all-subjects hidden" id="allSubjects">
        <h1>Danh Sách Môn Học</h1>
        <div className="subject-grid" id="subjectGrid"></div>
      </div>

      <div className="subject-detail hidden" id="subjectDetail">
        <button
          className="button"
          style={{
            background: "#43a047",
            color: "white",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
          onClick={() => (window as any).backToSubjects()}
        >
          ← Quay lại
        </button>
        <h1 id="subjectTitle">Chi tiết môn học</h1>
        <div className="detail-grid">
          <div className="detail-box" id="box1">
            <h3>📊 Tổng hợp điểm</h3>
            <p>
              Điểm trung bình: <span id="avgScore">8.5</span>
            </p>
            <p>
              Điểm cao nhất: <span id="maxScore">9.8</span>
            </p>
            <p>
              Điểm thấp nhất: <span id="minScore">6.7</span>
            </p>
          </div>
          <div className="detail-box" id="box2">
            <h3>📚 Kiến thức còn yếu</h3>
            <ul id="weakPoints">
              <li>Chưa nắm vững phần Định luật II Newton</li>
              <li>Cần ôn lại công thức bảo toàn năng lượng</li>
            </ul>
          </div>
          <div className="detail-box" id="box3">
            <h3>📝 Ghi chú nhiệm vụ</h3>
            <textarea
              id="taskNotes"
              placeholder="Nhập ghi chú nhiệm vụ tại đây..."
            ></textarea>
            <button className="button" onClick={() => (window as any).saveNotes()}>
              Lưu
            </button>
          </div>
          <div className="detail-box" id="box4">
            <h3>🤖 Gemini AI chuyên gia</h3>
            <p>Bạn có thể bật mic để trò chuyện trực tiếp về môn học này.</p>
            <button
              className="button"
              onClick={() => (window as any).startMic()}
            >
              🎙️ Bật mic
            </button>
            <div id="aiChat">
              <p>
                <b>Gemini:</b> Xin chào! Mình là AI chuyên gia về{" "}
                <span id="aiSubject">Vật Lí</span>. Bạn muốn hỏi gì nè?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
